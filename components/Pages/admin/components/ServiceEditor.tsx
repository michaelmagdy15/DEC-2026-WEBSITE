import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import { Loader2, Plus, Edit2, Trash2, X, Save } from 'lucide-react';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    details: any[];
}

const ServiceEditor: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Service>>({});
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('services')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            console.error('Error fetching services:', error);
        } else {
            setServices(data || []);
        }
        setLoading(false);
    };

    const handleAddNew = () => {
        setEditingId(null);
        setFormData({
            id: '',
            title: '',
            description: '',
            icon: '',
            image: '',
            details: []
        });
        setIsFormOpen(true);
    };

    const handleEdit = (service: Service) => {
        setEditingId(service.id);
        setFormData({ ...service });
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            const { error } = await supabase.from('services').delete().eq('id', id);
            if (error) {
                alert('Error deleting service');
            } else {
                fetchServices();
            }
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingId) {
                const { error } = await supabase
                    .from('services')
                    .update({
                        title: formData.title,
                        description: formData.description,
                        icon: formData.icon,
                        image: formData.image,
                        details: formData.details
                    })
                    .eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('services')
                    .insert([formData]);
                if (error) throw error;
            }
            setIsFormOpen(false);
            fetchServices();
        } catch (error) {
            console.error('Error saving service:', error);
            alert('Error saving service. Make sure the ID is unique.');
        } finally {
            setLoading(false);
        }
    };

    const addDetailSection = () => {
        setFormData({ ...formData, details: [...(formData.details || []), { title: '', items: [] }] });
    };

    const removeDetailSection = (index: number) => {
        const newDetails = [...(formData.details || [])];
        newDetails.splice(index, 1);
        setFormData({ ...formData, details: newDetails });
    };

    const handleDetailTitleChange = (index: number, value: string) => {
        const newDetails = [...(formData.details || [])];
        if (!newDetails[index]) newDetails[index] = { title: '', items: [] };
        newDetails[index].title = value;
        setFormData({ ...formData, details: newDetails });
    };

    const handleDetailItemsChange = (index: number, value: string) => {
        const newDetails = [...(formData.details || [])];
        if (!newDetails[index]) newDetails[index] = { title: '', items: [] };
        // Split by comma for simple array
        newDetails[index].items = value.split(',').map(item => item.trim()).filter(Boolean);
        setFormData({ ...formData, details: newDetails });
    };

    if (loading && services.length === 0) {
        return (
            <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-[#F58220]" size={40} />
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold capitalize">Manage Services</h2>
                {!isFormOpen && (
                    <button
                        onClick={handleAddNew}
                        className="bg-[#F58220] hover:bg-[#F58220]/90 text-white px-6 py-2 rounded-xl transition-colors font-medium flex items-center space-x-2"
                    >
                        <Plus size={20} />
                        <span>Add New</span>
                    </button>
                )}
            </div>

            {isFormOpen ? (
                <form onSubmit={handleSave} className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-medium">{editingId ? 'Edit Service' : 'Add New Service'}</h3>
                        <button type="button" onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Service ID (Unique, e.g. "arch")</label>
                            <input type="text" value={formData.id || ''} onChange={e => setFormData({ ...formData, id: e.target.value })} disabled={!!editingId} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220] disabled:opacity-50" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                            <input type="text" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Icon (e.g. ruler, frame, zap, hardhat)</label>
                            <input type="text" value={formData.icon || ''} onChange={e => setFormData({ ...formData, icon: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                            <textarea value={formData.description || ''} onChange={e => setFormData({ ...formData, description: e.target.value })} required rows={2} className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-1">Main Image URL</label>
                            <input type="url" value={formData.image || ''} onChange={e => setFormData({ ...formData, image: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                            {formData.image && <img src={formData.image} alt="Preview" className="mt-2 h-32 object-cover rounded-xl" />}
                        </div>
                    </div>

                    {/* Details section */}
                    <div className="border border-white/10 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                            <label className="block text-sm font-medium text-gray-400">Service Details (Sub-sections and lists)</label>
                            <button type="button" onClick={addDetailSection} className="text-[#F58220] hover:text-[#FF9B44] text-sm">+ Add Detail Section</button>
                        </div>
                        {formData.details?.map((detail, index) => (
                            <div key={index} className="flex gap-4 mb-4 border-b border-white/10 pb-4">
                                <div className="flex-1 space-y-2">
                                    <input type="text" placeholder="Section Title (Optional)" value={detail.title || ''} onChange={e => handleDetailTitleChange(index, e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-lg py-1 px-3" />
                                    <textarea placeholder="List Items (comma separated)" value={(detail.items || []).join(', ')} onChange={e => handleDetailItemsChange(index, e.target.value)} rows={2} className="w-full bg-black/50 border border-white/10 rounded-lg py-1 px-3 text-sm text-gray-300" />
                                </div>
                                <button type="button" onClick={() => removeDetailSection(index)} className="text-red-500 p-2 hover:bg-red-500/10 rounded-lg self-start"><X size={16} /></button>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-2 rounded-xl border border-white/10 hover:bg-white/5">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading} className="px-6 py-2 rounded-xl bg-[#F58220] hover:bg-[#F58220]/90 font-medium flex items-center space-x-2">
                            <Save size={20} />
                            <span>Save Service</span>
                        </button>
                    </div>
                </form>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <div key={service.id} className="bg-black/40 rounded-2xl overflow-hidden border border-white/5 hover:border-[#F58220]/50 transition-colors group p-6 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-[#F58220]/20 rounded-xl flex items-center justify-center mb-4 text-[#F58220]">
                                    {/* Since we use real lucide icons dynamically elsewhere, just put initials here for preview */}
                                    {service.icon.substring(0, 2).toUpperCase()}
                                </div>
                                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-4">{service.description}</p>
                            </div>

                            <div className="flex items-center justify-end space-x-2 pt-4 border-t border-white/5">
                                <button onClick={() => handleEdit(service)} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                    <Edit2 size={16} />
                                </button>
                                <button onClick={() => handleDelete(service.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                    {services.length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            No services found. Add one to get started.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ServiceEditor;
